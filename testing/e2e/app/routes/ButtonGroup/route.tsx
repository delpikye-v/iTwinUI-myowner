import { Button, ButtonGroup, Flex, IconButton } from '@itwin/itwinui-react';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';
import { useSearchParams } from '@remix-run/react';
import * as React from 'react';

export default function ButtonGroupTest() {
  const [searchParams] = useSearchParams();
  const config = getConfigFromSearchParams(searchParams);

  return config.exampleType === 'default' ? (
    <Default config={config} />
  ) : (
    <Overflow config={config} />
  );
}

const getConfigFromSearchParams = (searchParams: URLSearchParams) => {
  const exampleType = (searchParams.get('exampleType') ?? 'default') as
    | 'default'
    | 'overflow';
  const initialProvideOverflowButton =
    searchParams.get('provideOverflowButton') !== 'false';
  const orientation =
    (searchParams.get('orientation') as 'horizontal' | 'vertical') ||
    'horizontal';
  const overflowPlacement =
    (searchParams.get('overflowPlacement') as 'start' | 'end') || undefined;
  const showToggleProvideOverflowButton =
    searchParams.get('showToggleProvideOverflowButton') === 'true';

  return {
    exampleType,
    initialProvideOverflowButton,
    orientation,
    overflowPlacement,
    showToggleProvideOverflowButton,
  };
};

const Default = ({
  config,
}: {
  config: ReturnType<typeof getConfigFromSearchParams>;
}) => {
  const [provideOverflowButton, setProvideOverflowButton] = React.useState(
    config.initialProvideOverflowButton,
  );

  return (
    <Flex flexDirection='column' alignItems='flex-start'>
      {config.showToggleProvideOverflowButton && (
        <Button
          data-testid='toggle-provide-overflow-container'
          onClick={() => setProvideOverflowButton((prev) => !prev)}
        >
          {`Toggle provide overflow container (current = ${provideOverflowButton})`}
        </Button>
      )}

      <div id='container' style={{ background: 'hotpink' }}>
        <ButtonGroup
          role='toolbar'
          orientation={config.orientation as any}
          style={{
            width: config.orientation === 'horizontal' ? '100%' : undefined,
            height: config.orientation === 'vertical' ? '100%' : undefined,
          }}
          overflowPlacement={config.overflowPlacement}
          overflowButton={
            provideOverflowButton
              ? (firstOverflowingIndex) => {
                  return (
                    <IconButton data-testid='overflow-button'>
                      {firstOverflowingIndex}
                    </IconButton>
                  );
                }
              : undefined
          }
        >
          <IconButton label='Button 1'>
            <SvgPlaceholder />
          </IconButton>
          <IconButton label='Button 2' isActive>
            <SvgPlaceholder />
          </IconButton>
          <IconButton disabled label='Button 3'>
            <SvgPlaceholder />
          </IconButton>
        </ButtonGroup>
      </div>
    </Flex>
  );
};

const Overflow = ({
  config,
}: {
  config: ReturnType<typeof getConfigFromSearchParams>;
}) => {
  const buttons = [...Array(10)].map((_, index) => (
    <IconButton key={index}>
      <SvgPlaceholder />
    </IconButton>
  ));

  return (
    <div id='container' style={{ background: 'hotpink' }}>
      <ButtonGroup
        overflowButton={(startIndex) => <IconButton>{startIndex}</IconButton>}
        overflowPlacement={config.overflowPlacement}
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
};
